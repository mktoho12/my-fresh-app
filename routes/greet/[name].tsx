/** @jsx h */
import { h, FunctionComponent } from "preact"
import { PageProps } from "$fresh/server.ts"

const GreetPage: FunctionComponent<PageProps> = ({ params: { name } }) => {
  return (
    <main>
      <p>Greetings to you,{name}!</p>
    </main>
  )
}

export default GreetPage
