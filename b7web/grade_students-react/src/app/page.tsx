import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-6xl mb-15">Lista de estudantes</h1>
      <StudentTable students={students} />
    </div>
  );
}
