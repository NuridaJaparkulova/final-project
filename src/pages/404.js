import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div
      className="container"
      style={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ marginBottom: "50px" }}>Произошла ошибка...</h1>
      <p>
        {" "}
        Перейти на
        <Link href="/" style={{ fontStyle: "italic" }}>
          {" "}
          <b>главную страницу.</b>{" "}
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
