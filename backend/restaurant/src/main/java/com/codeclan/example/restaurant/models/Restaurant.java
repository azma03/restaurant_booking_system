package com.codeclan.example.restaurant.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "restaurants")
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @OneToMany(mappedBy = "restaurant", fetch = FetchType.LAZY)
    private List<Booth> booths;

    public Restaurant(String name) {
        this.name = name;
        this.booths = new ArrayList<Booth>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Booth> getBooths() {
        return booths;
    }

    public void setBooths(List<Booth> booths) {
        this.booths = booths;
    }

}




