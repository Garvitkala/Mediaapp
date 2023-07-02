package com.masai;
import java.io.*;
import java.util.*;

class User implements Serializable {
    private String username;
    private String password;
    private List<Movie> watchHistory;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.watchHistory = new ArrayList<>();
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public List<Movie> getWatchHistory() {
        return watchHistory;
    }

    public void addToWatchHistory(Movie movie) {
        watchHistory.add(movie);
    }
    public void watchMovie(Movie movie) {
        System.out.println("Watching movie: " + movie.getTitle());
        addToWatchHistory(movie);
    }

}

class ContentCreator implements Serializable {
    private String username;
    private String password;
    private List<Movie> movies;

    public ContentCreator(String username, String password) {
        this.username = username;
        this.password = password;
        this.movies = new ArrayList<>();
    }
    public void setPassword(String password) {
        this.password = password;
    }


    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public void addMovie(Movie movie) {
        movies.add(movie);
    }
}

class Movie implements Serializable {
    private String title;
    private ContentCreator contentCreator;

    public Movie(String title, ContentCreator contentCreator) {
        this.title = title;
        this.contentCreator = contentCreator;
    }
    public void setTitle(String title) {
        this.title = title;
    }


    public String getTitle() {
        return title;
    }

    public ContentCreator getContentCreator() {
        return contentCreator;
    }
}

class Admin implements Serializable {
    private String username;
    private String password;
    private Map<String, User> users;
    private Map<String, ContentCreator> contentCreators;
    private List<Movie> movies;

    public Admin(String username, String password) {
        this.username = username;
        this.password = password;
        this.users = new HashMap<>();
        this.contentCreators = new HashMap<>();
        this.movies = new ArrayList<>();
    }

    public void setUsers(Map<String, User> users) {
        this.users = users;
    }

    public void setContentCreators(Map<String, ContentCreator> contentCreators) {
        this.contentCreators = contentCreators;
    }

    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }

    public Map<String, User> getUsers() {
        return users;
    }

    public Map<String, ContentCreator> getContentCreators() {
        return contentCreators;
    }

    public List<Movie> getMovies() {
        return movies;
    }

    public void login() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your username: ");
        String username = scanner.nextLine();
        System.out.print("Enter your password: ");
        String password = scanner.nextLine();
        if (username.equals(this.username) && password.equals(this.password)) {
            System.out.println("Admin login successful!");
            adminMenu();
        } else {
            System.out.println("Invalid credentials. Login failed!");
        }
    }

    public void userLogin() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your username: ");
        String username = scanner.nextLine();
        System.out.print("Enter your password: ");
        String password = scanner.nextLine();
        User user = users.get(username);
        if (user != null && user.getPassword().equals(password)) {
            System.out.println("User login successful!");
            userMenu(user);
        } else {
            System.out.println("Invalid credentials. Login failed!");
        }
    }

    public void userSignup() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your username: ");
        String username = scanner.nextLine();
        if (users.containsKey(username)) {
            System.out.println("Username already exists. Signup failed!");
            return;
        }
        System.out.print("Enter your password: ");
        String password = scanner.nextLine();
        User user = new User(username, password);
        users.put(username, user);
        System.out.println("User signup successful!");
        userMenu(user);
    }

    public void contentCreatorLogin() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your username: ");
        String username = scanner.nextLine();
        System.out.print("Enter your password: ");
        String password = scanner.nextLine();
        ContentCreator contentCreator = contentCreators.get(username);
        if (contentCreator != null && contentCreator.getPassword().equals(password)) {
            System.out.println("Content Creator login successful!");
            contentCreatorMenu(contentCreator);
        } else {
            System.out.println("Invalid credentials. Login failed!");
        }
    }

    public void contentCreatorSignup() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your username: ");
        String username = scanner.nextLine();
        if (contentCreators.containsKey(username)) {
            System.out.println("Username already exists. Signup failed!");
            return;
        }
        System.out.print("Enter your password: ");
        String password = scanner.nextLine();
        ContentCreator contentCreator = new ContentCreator(username, password);
        contentCreators.put(username, contentCreator);
        System.out.println("Content Creator signup successful!");
        contentCreatorMenu(contentCreator);
    }

    public void adminMenu() {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\n--- Admin Menu ---");
            System.out.println("1. Manage Content Creators");
            System.out.println("2. Manage Content Creator Requests");
            System.out.println("3. Manage All Movies");
            System.out.println("4. Manage Users");
            System.out.println("5. View All Users' Watch History");
            System.out.println("0. Logout");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1:
                    manageContentCreators();
                    break;
                case 2:
                    manageContentCreatorRequests();
                    break;
                case 3:
                    manageAllMovies();
                    break;
                case 4:
                    manageUsers();
                    break;
                case 5:
                    viewAllUsersWatchHistory();
                    break;
                case 0:
                    System.out.println("Logging out...");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }

    public void manageContentCreators() {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\n--- Manage Content Creators ---");
            System.out.println("1. Add Content Creator");
            System.out.println("2. Update Content Creator");
            System.out.println("3. Delete Content Creator");
            System.out.println("4. View All Content Creators");
            System.out.println("0. Go Back");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1:
                    addContentCreator();
                    break;
                case 2:
                    updateContentCreator();
                    break;
                case 3:
                    deleteContentCreator();
                    break;
                case 4:
                    viewAllContentCreators();
                    break;
                case 0:
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }

    public void addContentCreator() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the username of the Content Creator: ");
        String username = scanner.nextLine();
        if (contentCreators.containsKey(username)) {
            System.out.println("Content Creator already exists. Adding failed!");
            return;
        }
        System.out.print("Enter the password of the Content Creator: ");
        String password = scanner.nextLine();
        ContentCreator contentCreator = new ContentCreator(username, password);
        contentCreators.put(username, contentCreator);
        System.out.println("Content Creator added successfully!");
    }

    public void updateContentCreator() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the username of the Content Creator to update: ");
        String username = scanner.nextLine();
        if (!contentCreators.containsKey(username)) {
            System.out.println("Content Creator not found. Update failed!");
            return;
        }
        ContentCreator contentCreator = contentCreators.get(username);
        System.out.println("Content Creator: " + contentCreator.getUsername());
        System.out.print("Enter the new password for the Content Creator: ");
        String password = scanner.nextLine();
        contentCreator.setPassword(password);
        System.out.println("Content Creator updated successfully!");
    }

    public void deleteContentCreator() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the username of the Content Creator to delete: ");
        String username = scanner.nextLine();
        if (!contentCreators.containsKey(username)) {
            System.out.println("Content Creator not found. Deletion failed!");
            return;
        }
        contentCreators.remove(username);
        System.out.println("Content Creator deleted successfully!");
    }

    public void viewAllContentCreators() {
        System.out.println("--- All Content Creators ---");
        for (ContentCreator contentCreator : contentCreators.values()) {
            System.out.println("Username: " + contentCreator.getUsername());
        }
    }

    public void manageContentCreatorRequests() {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\n--- Manage Content Creator Requests ---");
            System.out.println("1. View All Requests");
            System.out.println("2. Approve Request");
            System.out.println("3. Deny Request");
            System.out.println("0. Go Back");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1:
                    viewAllRequests();
                    break;
                case 2:
                    approveRequest();
                    break;
                case 3:
                    denyRequest();
                    break;
                case 0:
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }

    public void viewAllRequests() {
        System.out.println("--- All Requests ---");
        for (ContentCreator contentCreator : contentCreators.values()) {
            System.out.println("Content Creator: " + contentCreator.getUsername());
            List<Movie> requests = contentCreator.getMovies();
            if (requests.isEmpty()) {
                System.out.println("No requests.");
            } else {
                for (Movie movie : requests) {
                    System.out.println("Movie: " + movie.getTitle());
                }
            }
        }
    }

    public void approveRequest() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the username of the Content Creator: ");
        String username = scanner.nextLine();
        if (!contentCreators.containsKey(username)) {
            System.out.println("Content Creator not found. Approval failed!");
            return;
        }
        ContentCreator contentCreator = contentCreators.get(username);
        List<Movie> requests = contentCreator.getMovies();
        if (requests.isEmpty()) {
            System.out.println("No requests to approve.");
            return;
        }
        System.out.println("--- Requests for Content Creator: " + contentCreator.getUsername() + " ---");
        for (Movie movie : requests) {
            System.out.println("Movie: " + movie.getTitle());
        }
        System.out.print("Enter the title of the movie to approve: ");
        String title = scanner.nextLine();
        Movie movieToApprove = null;
        for (Movie movie : requests) {
            if (movie.getTitle().equals(title)) {
                movieToApprove = movie;
                break;
            }
        }
        if (movieToApprove == null) {
            System.out.println("Invalid movie title. Approval failed!");
            return;
        }
        contentCreator.addMovie(movieToApprove);
        movies.add(movieToApprove);
        requests.remove(movieToApprove);
        System.out.println("Movie approved successfully!");
    }

    public void denyRequest() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the username of the Content Creator: ");
        String username = scanner.nextLine();
        if (!contentCreators.containsKey(username)) {
            System.out.println("Content Creator not found. Denial failed!");
            return;
        }
        ContentCreator contentCreator = contentCreators.get(username);
        List<Movie> requests = contentCreator.getMovies();
        if (requests.isEmpty()) {
            System.out.println("No requests to deny.");
            return;
        }
        System.out.println("--- Requests for Content Creator: " + contentCreator.getUsername() + " ---");
        for (Movie movie : requests) {
            System.out.println("Movie: " + movie.getTitle());
        }
        System.out.print("Enter the title of the movie to deny: ");
        String title = scanner.nextLine();
        Movie movieToDeny = null;
        for (Movie movie : requests) {
            if (movie.getTitle().equals(title)) {
                movieToDeny = movie;
                break;
            }
        }
        if (movieToDeny == null) {
            System.out.println("Invalid movie title. Denial failed!");
            return;
        }
        requests.remove(movieToDeny);
        System.out.println("Movie denied successfully!");
    }

    public void manageAllMovies() {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\n--- Manage All Movies ---");
            System.out.println("1. Add Movie");
            System.out.println("2. Update Movie");
            System.out.println("3. Delete Movie");
            System.out.println("4. View All Movies");
            System.out.println("0. Go Back");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1:
                    addMovie();
                    break;
                case 2:
                    updateMovie();
                    break;
                case 3:
                    deleteMovie();
                    break;
                case 4:
                    viewAllMovies();
                    break;
                case 0:
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }

    public void addMovie() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the title of the movie: ");
        String title = scanner.nextLine();
        System.out.print("Enter the username of the Content Creator: ");
        String username = scanner.nextLine();
        ContentCreator contentCreator = contentCreators.get(username);
        if (contentCreator == null) {
            System.out.println("Content Creator not found. Adding movie failed!");
            return;
        }
        Movie movie = new Movie(title, contentCreator);
        movies.add(movie);
        contentCreator.addMovie(movie);
        System.out.println("Movie added successfully!");
    }

    public void updateMovie() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the title of the movie to update: ");
        String title = scanner.nextLine();
        Movie movieToUpdate = null;
        for (Movie movie : movies) {
            if (movie.getTitle().equals(title)) {
                movieToUpdate = movie;
                break;
            }
        }
        if (movieToUpdate == null) {
            System.out.println("Movie not found. Update failed!");
            return;
        }
        System.out.println("Movie: " + movieToUpdate.getTitle());
        System.out.print("Enter the new title for the movie: ");
        String newTitle = scanner.nextLine();
        movieToUpdate.setTitle(newTitle);
        System.out.println("Movie updated successfully!");
    }

    public void deleteMovie() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the title of the movie to delete: ");
        String title = scanner.nextLine();
        Movie movieToDelete = null;
        for (Movie movie : movies) {
            if (movie.getTitle().equals(title)) {
                movieToDelete = movie;
                break;
            }
        }
        if (movieToDelete == null) {
            System.out.println("Movie not found. Deletion failed!");
            return;
        }
        movies.remove(movieToDelete);
        ContentCreator contentCreator = movieToDelete.getContentCreator();
        contentCreator.getMovies().remove(movieToDelete);
        System.out.println("Movie deleted successfully!");
    }

    public void viewAllMovies() {
        System.out.println("--- All Movies ---");
        for (Movie movie : movies) {
            System.out.println("Title: " + movie.getTitle() + ", Content Creator: " + movie.getContentCreator().getUsername());
        }
    }

    public void manageUsers() {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\n--- Manage Users ---");
            System.out.println("1. View All Users");
            System.out.println("2. Delete User");
            System.out.println("0. Go Back");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1:
                    viewAllUsers();
                    break;
                case 2:
                    deleteUser();
                    break;
                case 0:
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }

    public void viewAllUsers() {
        System.out.println("--- All Users ---");
        for (User user : users.values()) {
            System.out.println("Username: " + user.getUsername());
        }
    }

    public void deleteUser() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the username of the user to delete: ");
        String username = scanner.nextLine();
        if (!users.containsKey(username)) {
            System.out.println("User not found. Deletion failed!");
            return;
        }
        users.remove(username);
        System.out.println("User deleted successfully!");
    }

    public void viewAllUsersWatchHistory() {
        System.out.println("--- All Users' Watch History ---");
        for (User user : users.values()) {
            System.out.println("Username: " + user.getUsername());
            List<Movie> watchHistory = user.getWatchHistory();
            if (watchHistory.isEmpty()) {
                System.out.println("No movies watched.");
            } else {
                for (Movie movie : watchHistory) {
                    System.out.println("Movie: " + movie.getTitle() + ", Content Creator: " + movie.getContentCreator().getUsername());
                }
            }
        }
    }

    public void userMenu(User user) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\n--- User Menu ---");
            System.out.println("1. View All Movies");
            System.out.println("2. Watch Movie");
            System.out.println("3. View Watch History");
            System.out.println("0. Logout");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1:
                    viewAllMovies();
                    break;
                case 2:
                    watchMovie(user);
                    break;
                case 3:
                    viewWatchHistory(user);
                    break;
                case 0:
                    System.out.println("Logging out...");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }

    public void watchMovie(User user) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the title of the movie to watch: ");
        String title = scanner.nextLine();
        Movie movieToWatch = null;
        for (Movie movie : movies) {
            if (movie.getTitle().equals(title)) {
                movieToWatch = movie;
                break;
            }
        }
        if (movieToWatch == null) {
            System.out.println("Movie not found. Watch failed!");
            return;
        }
        user.watchMovie(movieToWatch);
        System.out.println("You watched the movie: " + movieToWatch.getTitle());
    }

    public void viewWatchHistory(User user) {
        System.out.println("--- Watch History for User: " + user.getUsername() + " ---");
        List<Movie> watchHistory = user.getWatchHistory();
        if (watchHistory.isEmpty()) {
            System.out.println("No movies watched.");
        } else {
            for (Movie movie : watchHistory) {
                System.out.println("Movie: " + movie.getTitle() + ", Content Creator: " + movie.getContentCreator().getUsername());
            }
        }
    }

    public void contentCreatorMenu(ContentCreator contentCreator) {
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\n--- Content Creator Menu ---");
            System.out.println("1. View My Movies");
            System.out.println("2. Request Movie");
            System.out.println("0. Logout");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1:
                    viewMyMovies(contentCreator);
                    break;
                case 2:
                    requestMovie(contentCreator);
                    break;
             
                case 0:
                    System.out.println("Logging out...");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }

    public void viewMyMovies(ContentCreator contentCreator) {
        System.out.println("--- My Movies ---");
        List<Movie> myMovies = contentCreator.getMovies();
        if (myMovies.isEmpty()) {
            System.out.println("No movies created.");
        } else {
            for (Movie movie : myMovies) {
                System.out.println("Title: " + movie.getTitle());
            }
        }
    }

    public void requestMovie(ContentCreator contentCreator) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the title of the movie to request: ");
        String title = scanner.nextLine();
        Movie movie = new Movie(title, contentCreator);
        contentCreator.addMovie(movie);
        System.out.println("Movie requested successfully!");
    }
}

public class Main {
    public static void main(String[] args) {
    	String a="admin";
    	String b="admin";
        Admin admin = new Admin(a,b);
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("\n--- Movie Streaming App ---");
            System.out.println("1. Admin Login");
            System.out.println("2. User Login");
            System.out.println("3. User Signup");
            System.out.println("4. Content Creator Login");
            System.out.println("5. Content Creator Signup");
            System.out.println("0. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1:
                    admin.login();
                    break;
                case 2:
                    admin.userLogin();
                    break;
                case 3:
                    admin.userSignup();
                    break;
                case 4:
                    admin.contentCreatorLogin();
                    break;
                case 5:
                    admin.contentCreatorSignup();
                    break;
                case 0:
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
        }
    }
}
