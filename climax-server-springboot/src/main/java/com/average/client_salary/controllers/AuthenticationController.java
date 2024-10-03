package com.average.client_salary.controllers;


import com.average.client_salary.constants.ApiRoutes;
import com.average.client_salary.entities.AuthenticationResponse;
import com.average.client_salary.entities.User;
import com.average.client_salary.services.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(ApiRoutes.BASE_URL)
public class AuthenticationController {
    private final AuthenticationService authService;

    public AuthenticationController(AuthenticationService authService) {
        this.authService = authService;
    }

    @PostMapping(ApiRoutes.REGISTER)
    public ResponseEntity<AuthenticationResponse> register(@RequestBody User request) {
    return ResponseEntity.ok(authService.register(request));
    }
    @PostMapping(ApiRoutes.LOGIN)
    public ResponseEntity<AuthenticationResponse> login(@RequestBody User request) {
    return ResponseEntity.ok(authService.authenticate(request));
    }


}