/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-3xl font-bold mt-2 mb-4`}>My Fresh Project</h1>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />

      <ul>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  )
}
