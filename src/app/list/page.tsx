import { getComicsByHeroName } from "@/api/marvel";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  return (
    <main>
      <section>
        <h1>Top Rated Comics</h1>
        <div>
          <div>
            <img src="" alt="" />
            <p>The Flash, Vol 1</p>
            <span>Joshua Williamson</span>
          </div>
        </div>
      </section>
    </main>
  );
}
