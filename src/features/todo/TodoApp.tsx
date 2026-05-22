const TodoApp = () => {

    return (
        <>
            <div className="max-w-sn mx-auto pb-12">
                <h1 className="text-center text-2xl py-8">
                    To-Do list
                </h1>

                <input
                    type="text"
                    className="flex-1 border p-2 rounded"
                    placeholder="New Task..."

                />

            </div>
        </>
    )
}

export default TodoApp;