export function useFormEvents() {
  function handleSubmit(e?: Event): Promise<void> {
    e && e.preventDefault()

    return Promise.resolve()
  }

  return {
    handleSubmit,
  }
}
