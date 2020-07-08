package com.brilife.restservice.summaries;

public class PemakaiKontrasepsiSummary {

    private String name;

    private Long jumlahPemakai;

    public PemakaiKontrasepsiSummary(String name, Long jumlahPemakai) {
        this.name = name;
        this.jumlahPemakai = jumlahPemakai;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getJumlahPemakai() {
        return jumlahPemakai;
    }

    public void setJumlahPemakai(Long jumlahPemakai) {
        this.jumlahPemakai = jumlahPemakai;
    }

}