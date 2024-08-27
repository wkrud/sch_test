package com.test.sch.sch_test.test.vo;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class TestVo implements Serializable {

    private String id;
    private String password;
    private String name;

}
