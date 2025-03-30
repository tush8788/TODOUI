import { useEffect } from "react"
import React from "react"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { fetchTaskList, updateTask } from "../../../store/slice/taskSlice"
import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import { DeleteOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { deleteTask } from "../../../services/TaskService"
import { cloneDeep } from "lodash"


const ListOfTasks = () => {
    const dispatch = useAppDispatch()
    const { task } = useAppSelector((state) => state.tasks)

    useEffect(() => {
        dispatch(fetchTaskList())
    }, [])

    return (
        <div className="mx-3">
        <div className="flex gap-2 flex-wrap">
            {task.length > 0 && task?.map((t: any) => {
                console.log("task",task)
                return (
                    <Card
                        key={t._id}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={t.url ||"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} />}
                        actions={[
                            
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            // <EllipsisOutlined key="ellipsis" />,
                            <DeleteOutlined key="delete" onClick={async()=>{
                                try{
                                    await deleteTask({taskId:t._id});
                                    let cloneTasks=cloneDeep(task);
                                    cloneTasks=cloneTasks.filter((ta:any)=>ta._id!=t._id)
                                    dispatch(updateTask(cloneTasks))
                                }
                                catch(err){

                                }
                            }}/>
                          ]}
                    >
                        <Meta title={t.name} description={t.desc} />
                    </Card>
                )
            })}
        </div>
        </div>
    )
}

export default React.memo(ListOfTasks)