package com.test.sch.test.controller;

import com.test.sch.test.service.TestService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    private TestService testService;

    @GetMapping(value = "/test")
    public String test() {
        System.out.println("test contorller");
        return "";
    }



}
