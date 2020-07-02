package com.brilife.restservice.exceptions;

public class EntityNotFoundException extends ApplicationException {

    public EntityNotFoundException() {
        super(ErrorCodes.ENTITY_NOT_FOUND, "exception.entity.not.found");
    }
}
