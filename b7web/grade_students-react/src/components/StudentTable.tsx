import { Student } from "@/types/Student";

type Props = {
  students: Student[];
}

export const StudentTable = ({ students }: Props) => {

  return (
    <table className="w-full">
      <thead className=" border border-white">
        <tr className="">
          <th>Name</th>
          <th>Status</th>
          <th>Grade 1</th>
          <th>Grade 2</th>
          <th>Média</th>
        </tr>
      </thead>

      <tbody>
        {students.map(student => (
          < tr key={student.id} className="border border-white">
            <td className="flex gap-20 items-center">
              <img src={student.avatar} alt={student.name} className=" m-5 w-20 h-20 rounded-full" />
              <div>
                <div className="font-bold">{student.name}</div>
                <div>{student.email}</div>
              </div>
            </td>
            <td className="text-center">
              {student.active && <div className="inline p-2 rounded bg-green-500">Active</div>}
              {!student.active && <div className="inline p-2 rounded bg-red-500">Inactive</div>}
            </td>
            <td className="text-center">{student.grade1}</td>
            <td className="text-center">{student.grade2}</td>
            <td className="text-center">{student.active ? ((student.grade1 + student.grade2) / 2).toFixed(1) : '---'}</td>
          </tr>
        ))}
      </tbody>
    </table >
  );
}
