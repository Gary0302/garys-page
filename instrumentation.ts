/** Node 25+ may expose a broken global localStorage when --localstorage-file has no path. */
function patchBrokenNodeLocalStorage() {
  if (typeof window !== "undefined") return

  const storage = globalThis.localStorage as Storage | undefined
  if (!storage || typeof storage.getItem === "function") return

  const memory = new Map<string, string>()
  globalThis.localStorage = {
    get length() {
      return memory.size
    },
    clear() {
      memory.clear()
    },
    getItem(key: string) {
      return memory.has(key) ? memory.get(key)! : null
    },
    key(index: number) {
      return [...memory.keys()][index] ?? null
    },
    removeItem(key: string) {
      memory.delete(key)
    },
    setItem(key: string, value: string) {
      memory.set(key, value)
    },
  }
}

export async function register() {
  patchBrokenNodeLocalStorage()
}
