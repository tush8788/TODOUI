import React, { useEffect } from "react"
import CreateTask from "./Component/CreateTask"
import ListOfTasks from "./Component/ListOfTasks"

const Dashboard = () => {
    useEffect(() => {
        console.log("render")
    }, [])

    return (
        <div>
            <CreateTask />
            <ListOfTasks />
        </div>
    )
}

export default React.memo(Dashboard)