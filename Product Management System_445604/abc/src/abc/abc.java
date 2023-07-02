import java.util.ArrayList;
import java.util.List;

abstract class Student {
    private int rollNo;
    private String name;
    private String state;

    public Student(int rollNo, String name, String state) {
        this.rollNo = rollNo;
        this.name = name;
        this.state = state;
    }

    public int getRollNo() {
        return rollNo;
    }

    public String getName() {
        return name;
    }

    public String getState() {
        return state;
    }

    @Override
    public String toString() {
        return "Student{" +
                "rollNo=" + rollNo +
                ", name='" + name + '\'' +
                ", state='" + state + '\'' +
                '}';
    }
}

class SchoolStudent extends Student {
    private String boardName;

    public SchoolStudent(int rollNo, String name, String state, String boardName) {
        super(rollNo, name, state);
        this.boardName = boardName;
    }

    public String getBoardName() {
        return boardName;
    }

    @Override
    public String toString() {
        return "SchoolStudent{" +
                "rollNo=" + getRollNo() +
                ", name='" + getName() + '\'' +
                ", state='" + getState() + '\'' +
                ", boardName='" + boardName + '\'' +
                '}';
    }
}

class CollegeStudent extends Student {
    private String universityName;

    public CollegeStudent(int rollNo, String name, String state, String universityName) {
        super(rollNo, name, state);
        this.universityName = universityName;
    }

    public String getUniversityName() {
        return universityName;
    }

    @Override
    public String toString() {
        return "CollegeStudent{" +
                "rollNo=" + getRollNo() +
                ", name='" + getName() + '\'' +
                ", state='" + getState() + '\'' +
                ", universityName='" + universityName + '\'' +
                '}';
    }
}

class Demo {
    public static void findStudentWithSameState(List<Student> result, List<? extends Student> students1,
                                                List<? extends Student> students2, String stateName) {
        for (Student student : students1) {
            if (student.getState().equals(stateName)) {
                result.add(student);
            }
        }
        for (Student student : students2) {
            if (student.getState().equals(stateName)) {
                result.add(student);
            }
        }
    }

    public static void main(String[] args) {
        List<SchoolStudent> schoolStudents = new ArrayList<>();
        schoolStudents.add(new SchoolStudent(1, "John", "California", "Board A"));
        schoolStudents.add(new SchoolStudent(2, "Alice", "New York", "Board B"));
        schoolStudents.add(new SchoolStudent(3, "Bob", "California", "Board C"));
        schoolStudents.add(new SchoolStudent(4, "Emma", "Texas", "Board D"));
        schoolStudents.add(new SchoolStudent(5, "Mike", "California", "Board E"));

        List<CollegeStudent> collegeStudents = new ArrayList<>();
        collegeStudents.add(new CollegeStudent(101, "Emily", "California", "University A"));
        collegeStudents.add(new CollegeStudent(102, "Alex", "Texas", "University B"));
        collegeStudents.add(new CollegeStudent(103, "Sophia", "California", "University C"));
        collegeStudents.add(new CollegeStudent(104, "Daniel", "New York", "University D"));
        collegeStudents.add(new CollegeStudent(105, "Olivia", "California", "University E"));

        List<Student> result = new ArrayList<>();
        findStudentWithSameState(result, schoolStudents, collegeStudents, "California");

        System.out.println(result);
    }
}
