package com.jeratest.studylinks.domain;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import com.google.common.collect.Lists;

@Entity
public class StudyLink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String url;
    private Date date;
    @Column
    @ElementCollection(targetClass=String.class)
    private List<String> categories = Lists.newArrayList();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Date getDate() { return date; }

    public void setDate(Date date) { this.date = date; }

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }
}
