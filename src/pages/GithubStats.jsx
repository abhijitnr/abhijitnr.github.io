import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
  return (
    <section id="github-stats">
      <h1>
        GitHub <span>Stats</span>
      </h1>

      {/* GitHUb Calender */}
      <div>
        <GitHubCalendar username="abhijitnr" />
      </div>

      {/* GitHub Stats */}
      <div id="stats">
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api?username=abhijitnr&show_icons=true&count_private=true&theme=chartreuse-dark&hide_border=true&bg_color=0D1117"
            alt="GitHUb Stats"
          />
        </div>

        <div>
          <img
            src="https://streak-stats.demolab.com/?user=abhijitnr&theme=chartreuse-dark"
            alt="GitHUb Streak"
          />
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
