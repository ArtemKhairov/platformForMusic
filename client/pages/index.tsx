import React from "react";
import MainLayout from "../layout/MainLayout";

export default function index() {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Добро пожаловать!</h1>
          <h3>Лучший схрон треков</h3>
        </div>
      </MainLayout>

      <style jsx>
        {`
          .center {
            margin-top: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
}
