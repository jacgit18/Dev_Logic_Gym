// import * as readlineSync from "readline-sync"
import { AllAttempts } from "./Attempt"
// import { AllSolution } from "./Solution"

// Experiment
type ChallengeFunction = (...params: any[]) => any

interface ChallengeCategory {
  [challenge: string]: ChallengeFunction
}

interface AllSolutions {
  [category: string]: ChallengeCategory
}

// async function promptForChallenge(allSolutions: AllSolutions) {
//   const categories = Object.keys(allSolutions)
//   const selectedCategory = await promptUser("Select a category", categories)

//   const challengesInCategory = Object.keys(allSolutions[selectedCategory])
//   const selectedChallenge = await promptUser("Select a challenge", challengesInCategory)

//   const challengeFunction = allSolutions[selectedCategory][selectedChallenge]

//   const parameters = await promptUser("Enter challenge parameters (comma-separated)", [])

//   const paramArray = parameters.split(",").map((param) => param.trim())

//   try {
//     const result = await challengeFunction(...paramArray)
//     console.log("Challenge result:", result)
//   } catch (error) {
//     if (typeof error === "object" && error !== null && "message" in error) {
//       console.error("Error executing the challenge:", (error as Error).message)
//     } else {
//       console.error("Unknown error:", (error as Error).message)
//     }
//   }
// }

// async function promptUser(promptMessage: string, options: string[]): Promise<string> {
//   const userInput = readlineSync.keyInSelect(options, `${promptMessage} (use arrow keys to select)`)

//   if (userInput === -1) {
//     console.error("Invalid input. Please try again.")
//     return await promptUser(promptMessage, options)
//   }

//   return options[userInput]
// }



// Example usage with AllSolution import
const allSolutions: AllSolutions = {
  SolutionExtra: {
    challengeTwo: (param: string) => {
      // Replace this with the actual implementation of challengeTwo
      return `Challenge Two executed with param: ${param}`
    },
    // Add other challenges in SolutionExtra
  },
  // Add other solution categories
}

// Run the prompt
// promptForChallenge(allSolutions);

const main = () => {
  // let test = SolutionExtra.lc20("()[]{}");
  // let test = AllSolution.SolutionExtra
  // let test2 = AllAttempts.AttemptExtra
  // customLog("log", "Challenge:", test, "Solution")
  // console.log(test2)

  // Usage examples:
  // customLog("log", "Before:", "Hello", "After", "Additional Context")
  // customLog('info', 'Info:', 'Some Information', 'Details', 'More Context');
  // customLog('error', 'Error:', 'Something went wrong', 'Details', 'Error Context');

  // FastLogger(AllSolution)
  // console.log(AllSolution)
  // console.log(AllAttempts)

  // console.log(AllSolution.SolutionTwoPointer.lc1.pair_with_target_sum_Two_Pointer([6,8,9,16],17))
  // console.log(AllAttempts.AttemptTwoPointer.lc1.pair_with_target_sum_NaiveDec([6,8,9],8))

  AllAttempts.AttemptExtra.lc1010.numPairsDivisibleBy60BruteForce([]);

}

main()
