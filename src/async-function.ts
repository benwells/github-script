import * as core from '@actions/core'
import * as exec from '@actions/exec'
import { Context } from '@actions/github/lib/context'
import { GitHub } from '@actions/github/lib/utils'
import * as glob from '@actions/glob'
import * as io from '@actions/io'
// import { Octokit } from '@octokit/core'
// import { retry } from '@octokit/plugin-retry'

const AsyncFunction = Object.getPrototypeOf(async () => null).constructor
// const MyOctokit = Octokit.plugin(retry);
// const octokit = new MyOctokit({ auth: "secret123" });

type AsyncFunctionArguments = {
  context: Context
  core: typeof core
  github: InstanceType<typeof GitHub>
  exec: typeof exec
  glob: typeof glob
  io: typeof io
  require: NodeRequire
  __original_require__: NodeRequire
}

export function callAsyncFunction<T>(
  args: AsyncFunctionArguments,
  source: string
): Promise<T> {
  console.log('args', args);
  console.log('source', source);
  const fn = new AsyncFunction(...Object.keys(args), source)
  return fn(...Object.values(args))
}
