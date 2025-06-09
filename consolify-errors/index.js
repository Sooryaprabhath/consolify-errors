import chalk from 'chalk';

const getTimestamp = () => {
  return chalk.gray(`[${new Date().toLocaleTimeString()}]`);
};

const formatData = (data) => {
  if (typeof data === "object") {
    return JSON.stringify(data, null, 2);
  }
  return String(data);
};

const consolify = {
  error: (message, data) => {
    console.log(`${getTimestamp()} ${chalk.bgRed.white.bold(" ERROR ")} ${chalk.red(message)}`);
    if (data) console.log(chalk.red(formatData(data)));
  },
  warn: (message, data) => {
    console.log(`${getTimestamp()} ${chalk.bgYellow.black.bold(" WARN  ")} ${chalk.yellow(message)}`);
    if (data) console.log(chalk.yellow(formatData(data)));
  },
  info: (message, data) => {
    console.log(`${getTimestamp()} ${chalk.bgBlue.white.bold(" INFO  ")} ${chalk.cyan(message)}`);
    if (data) console.log(chalk.cyan(formatData(data)));
  },
  success: (message, data) => {
    console.log(`${getTimestamp()} ${chalk.bgGreen.white.bold(" DONE  ")} ${chalk.green(message)}`);
    if (data) console.log(chalk.green(formatData(data)));
  },
};

export default consolify;
