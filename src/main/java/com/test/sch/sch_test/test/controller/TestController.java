package com.test.sch.sch_test.test.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

//    private TestService testService;

    //    @PostMapping("/api/generate")
    @GetMapping("/test/hello")
    public String hello() {
        System.out.println("test contorller");
        return "테스트입니다.";
    }



}
