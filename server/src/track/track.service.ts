import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Model, ObjectId } from 'mongoose';
import { Comment,CommentDocument } from './schemas/comment.schema';
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileService, FileType } from 'src/file/file.service';

@Injectable({})
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private fileService :FileService
  ) {}

  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const picturePath=this.fileService.createFile(FileType.IMAGE, picture);
    const track = await this.trackModel.create({ ...dto, listen: 0, audio: audioPath, picture: picturePath })
    // console.log(track)
    return track;
  }
  async getAll(): Promise<Track[]> {
    const tracks = await this.trackModel.find();
    return tracks;
  }
  async getOne(id:ObjectId):Promise<Track> {
    const track = await (await this.trackModel.findById(id)).populate('comments');
    // подтягивает другие данные
    // populate (mongoose)
    return track;
  }
  async delete(id:ObjectId):Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id);
    return track._id;
  }
  async addComment(dto:CreateCommentDto):Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    // console.log(track)
    const comment = await this.commentModel.create({ ...dto });
    track.comments.push(comment._id);
    await track.save();
    return comment;
  }
}