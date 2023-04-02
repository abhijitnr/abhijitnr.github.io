import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

const GithubStats = () => {
  return (
    <section id="github-stats">
      <motion.h1
        animate={{
          borderRadius: ["50%", "0%", "50%", "0%", "50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        whileHover={{ scale: [null, 1.2, 1.1] }}
      >
        GitHub <span>Stats</span>
      </motion.h1>

      {/* GitHUb Calender */}
      <motion.div
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.3 }}
      >
        <GitHubCalendar username="abhijitnr" />
      </motion.div>

      {/* GitHub Stats */}
      <div id="stats">
        <div>
          <motion.img
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{ duration: 0.3 }}
            src="https://github-readme-stats.vercel.app/api?username=abhijitnr&show_icons=true&count_private=true&theme=chartreuse-dark&hide_border=true&bg_color=0D1117"
            alt="GitHUb Stats"
          />
        </div>

        <div>
          <motion.img
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{ duration: 0.3 }}
            src="https://streak-stats.demolab.com/?user=abhijitnr&theme=chartreuse-dark"
            alt="GitHUb Streak"
          />
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
