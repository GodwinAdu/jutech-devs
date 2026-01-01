export interface Problem {
  id: number
  title: string
  difficulty: "Easy" | "Medium" | "Hard"
  description: string
  examples: Array<{
    input: string
    output: string
    explanation?: string
  }>
  constraints: string[]
  starterCode: string
  functionName: string
  testCases: Array<{
    input: any
    expected: any
  }>
}

export const problems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]"
      }
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists."
    ],
    starterCode: `function twoSum(nums, target) {
    // Write your solution here
    
}`,
    functionName: "twoSum",
    testCases: [
      { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
      { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
      { input: { nums: [3, 3], target: 6 }, expected: [0, 1] }
    ]
  },
  {
    id: 2,
    title: "Reverse Integer",
    difficulty: "Medium",
    description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2³¹, 2³¹ - 1], then return 0.",
    examples: [
      {
        input: "x = 123",
        output: "321"
      },
      {
        input: "x = -123",
        output: "-321"
      },
      {
        input: "x = 120",
        output: "21"
      }
    ],
    constraints: [
      "-2³¹ ≤ x ≤ 2³¹ - 1"
    ],
    starterCode: `function reverse(x) {
    // Write your solution here
    
}`,
    functionName: "reverse",
    testCases: [
      { input: { x: 123 }, expected: 321 },
      { input: { x: -123 }, expected: -321 },
      { input: { x: 120 }, expected: 21 }
    ]
  },
  {
    id: 3,
    title: "Palindrome Number",
    difficulty: "Easy",
    description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left."
      },
      {
        input: "x = -121",
        output: "false",
        explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
      }
    ],
    constraints: [
      "-2³¹ ≤ x ≤ 2³¹ - 1"
    ],
    starterCode: `function isPalindrome(x) {
    // Write your solution here
    
}`,
    functionName: "isPalindrome",
    testCases: [
      { input: { x: 121 }, expected: true },
      { input: { x: -121 }, expected: false },
      { input: { x: 10 }, expected: false }
    ]
  },
  {
    id: 4,
    title: "Valid Parentheses",
    difficulty: "Easy",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets and in the correct order.",
    examples: [
      {
        input: 's = "()"',
        output: "true"
      },
      {
        input: 's = "()[]{}"',
        output: "true"
      },
      {
        input: 's = "(]"',
        output: "false"
      }
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁴",
      "s consists of parentheses only '()[]{}'."
    ],
    starterCode: `function isValid(s) {
    // Write your solution here
    
}`,
    functionName: "isValid",
    testCases: [
      { input: { s: "()" }, expected: true },
      { input: { s: "()[]{}" }, expected: true },
      { input: { s: "(]" }, expected: false }
    ]
  },
  {
    id: 5,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    description: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.",
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]"
      },
      {
        input: "list1 = [], list2 = []",
        output: "[]"
      }
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50].",
      "-100 ≤ Node.val ≤ 100",
      "Both list1 and list2 are sorted in non-decreasing order."
    ],
    starterCode: `function mergeTwoLists(list1, list2) {
    // Write your solution here
    
}`,
    functionName: "mergeTwoLists",
    testCases: [
      { input: { list1: [1, 2, 4], list2: [1, 3, 4] }, expected: [1, 1, 2, 3, 4, 4] },
      { input: { list1: [], list2: [] }, expected: [] },
      { input: { list1: [], list2: [0] }, expected: [0] }
    ]
  }
]