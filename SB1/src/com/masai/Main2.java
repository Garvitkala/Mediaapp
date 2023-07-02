package com.masai;
import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

interface PrintList {
    void display(List<String> city);
}

public class Main {
    public static void main(String[] args) {
        List<String> cities = Arrays.asList("New York", "London", "Tokyo", "Paris", "Sydney");

        PrintList printList = l -> {
            Consumer<List<String>> cityConsumer = list -> {
                for (String city : list) {
                    System.out.println(city);
                }
            };
            cityConsumer.accept(l);
        };

        printList.display(cities);
    }
}
