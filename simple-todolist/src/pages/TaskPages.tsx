import { useNavigate, useParams } from 'react-router-dom';
import { CheckCircle, ChevronLeft, XCircle } from 'lucide-react';
interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}
const TaskPages = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const parsedTaskId = taskId ? parseInt(taskId, 10) : null;
  const localTask = localStorage.getItem('tasks');
  const tasks: Task[] = localTask ? JSON.parse(localTask) : [];
  const task = tasks.find((t) => t.id === parsedTaskId);
  if (!task) {
    return <div className="text-center text-red-500">Task not found!</div>;
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center items-center">
      <div className="w-[500px] p-6 bg-slate-200 rounded-md shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <button
            className="bg-slate-400 rounded-md p-2 hover:bg-slate-600"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="text-white" size={20} />
          </button>
          <h1 className="text-2xl font-bold text-center text-slate-800">Task Details</h1>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium text-slate-700">Title:</p>
          <p className="text-slate-600">{task.title}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium text-slate-700">Description:</p>
          <p className="text-slate-600">{task.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium text-slate-700">Status:</p>
          {task.isCompleted ? (
            <>
              <CheckCircle className="text-green-600" size={20} />
              <p className="text-green-600">Completed</p>
            </>
          ) : (
            <>
              <XCircle className="text-red-600" size={20} />
              <p className="text-red-600">Not Completed</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default TaskPages;
