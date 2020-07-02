package com.enigma.restservice.exceptions;

public class PathNotFoundException extends ApplicationException {

    public PathNotFoundException() {
        super(ErrorCodes.ENTITY_NOT_FOUND, "exception.path.not.found");
    }
}


