package com.example.microservice1.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

@RestController
@RequestMapping("/process")
public class ProcessController {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String PYTHON_SERVICE = "http://localhost:5000";

    @GetMapping("/{data}")
    public ResponseEntity<String> process(@PathVariable String data) {
        // Call Python Microservice
        String url = PYTHON_SERVICE + "/final/" + data;
        String result = restTemplate.getForObject(url, String.class);
        return ResponseEntity.ok("Java Service → " + result);
    }
}
