import R from 'ramda'

type OperationType = '*' | '+' | '/' | '-'

interface Operation {
  type: OperationType
  value: number
}

function isOperationType (input: any): input is OperationType {
  return input === '*' || input === '+' || input === '/' || input === '-'
}

function state (start: number, operations: Operation[]) {
  return {
    addOperation (type, value) {
      if (typeof value !== 'number' || !isOperationType(type)) {
        throw new Error('invalid type or value')
      }
      return state(start, [...operations, { type, value }])
    },

    calculate () {
      const flattenedOps = R.pipe(
        R.map(({ type, value }) => [type, value]),
        R.flatten,
        R.prepend(start)
      )(operations)

      const splitOps = R.pipe(
        R.reduce()
      )(flattenedOps)
    },
  }
}
