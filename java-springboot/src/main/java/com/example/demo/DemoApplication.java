package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@RestController
	@CrossOrigin(origins = "http://localhost:5173")
	public class HelloController {
		@GetMapping("/api/hello")
		public String hello() {
			return "Pozdrav iz Spring Boot backenda";
		}
	}

}
