package com.enigma.restservice.validation.annotations;

import com.enigma.restservice.validation.MinLengthValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target({ElementType.FIELD, ElementType.METHOD})
@Retention(RUNTIME)
@Constraint(validatedBy = MinLengthValidator.class)
@Documented

public @interface MinLength {
    String message() default "{com.enigma.restservice.validation.annotations.MinLength.message}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    int value();

    @Target({ElementType.FIELD, ElementType.METHOD})
    @Retention(RUNTIME)
    @Documented
    @interface List {
        MinLength[] value();
    }
}