package com.brilife.restservice.controllers;

import com.brilife.restservice.exceptions.PathNotFoundException;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;


@Controller
public class CustomErrorController implements ErrorController {

    @GetMapping("/error")
    public void handleError(HttpServletRequest request) {
        Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status_code");
         {
            throw new PathNotFoundException();
        }
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}
