package com.abisu.jobapp.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class Job {   
    @GetMapping("path")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    

}
