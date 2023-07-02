package com.masai;
import java.util.List;
import java.util.Optional;

class Student {
    private int rollNo;
    private String name;
    private int marks;

    public Student(int rollNo, String name, int marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
    }

    public int getRollNo() {
        return rollNo;
    }

    public void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMarks() {
        return marks;
    }

    public void setMarks(int marks) {
        this.marks = marks;
    }
}

class StudentOperation {
    static Optional<List<Student>> findStudent(List<Student> studentList) {
        // Filter the passed students (marks >= 55)
        List<Student> passedStudents = studentList.stream()
                .filter(student -> student.getMarks() >= 55)
                .toList();

        // Return an Optional object with the list of passed students (or null if no student passed)
        return Optional.ofNullable(passedStudents.isEmpty() ? null : passedStudents);
    }

    static int getOutstandingStudentCount(List<Student> studentList) throws NoStudentPassedException {
        // Get the list of passed students using findStudent() method
        Optional<List<Student>> optionalPassedStudents = findStudent(studentList);

        // Get the list of passed students, or throw NoStudentPassedException if no student is passed
        List<Student> passedStudents = optionalPassedStudents.orElseThrow(NoStudentPassedException::new);

        // Return the count of passed students
        return passedStudents.size();
    }
}

class NoStudentPassedException extends Exception {
    public NoStudentPassedException() {
        super("No student is passed");
    }
}

public class Demo2 {
    public static void main(String[] args) {
        List<Student> studentList1 = List.of(
                new Student(1, "abc", 75),
                new Student(2, "def", 85),
                new Student(3, "ijk", 60),
                new Student(4, "lmn", 45),
                new Student(5, "opq", 90)
        );

        try {
            int outstandingStudentCount1 = StudentOperation.getOutstandingStudentCount(studentList1);
            System.out.println("Count of passed students: " + outstandingStudentCount1);
        } catch (NoStudentPassedException e) {
            System.out.println(e.getMessage());
        }

        List<Student> studentList2 = List.of(
                new Student(1, "abc", 45),
                new Student(2, "def", 35),
                new Student(3, "jhi", 40),
                new Student(4, "jkl", 30),
                new Student(5, "mno", 50)
        );

        try {
            int outstandingStudentCount2 = StudentOperation.getOutstandingStudentCount(studentList2);
            System.out.println("Count of passed students: " + outstandingStudentCount2);
        } catch (NoStudentPassedException e) {
            System.out.println(e.getMessage());
        }
    }
}
