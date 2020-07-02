package com.brilife.restservice.summaries;

public class PemakaiKontrasepsiSummary {

    private String nama;

    private Long jumlahPemakai;

    public PemakaiKontrasepsiSummary(String nama, Long jumlahPemakai) {
        this.nama = nama;
        this.jumlahPemakai = jumlahPemakai;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public Long getJumlahPemakai() {
        return jumlahPemakai;
    }

    public void setJumlahPemakai(Long jumlahPemakai) {
        this.jumlahPemakai = jumlahPemakai;
    }

}