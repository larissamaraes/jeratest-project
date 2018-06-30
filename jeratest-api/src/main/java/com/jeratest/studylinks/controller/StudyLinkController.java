package com.jeratest.studylinks.controller;

import com.jeratest.studylinks.domain.StudyLink;
import com.jeratest.studylinks.service.StudyLinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/")
public class StudyLinkController {

    private StudyLinkService studyLinkService;

    @Autowired
    public StudyLinkController(StudyLinkService studyLinkService) {
        this.studyLinkService = studyLinkService;
    }

    @GetMapping("/")
    public List<StudyLink> list(){
        return studyLinkService.findAll();
    }

    @PostMapping("/")
    public StudyLink create(@Validated @RequestBody StudyLink studyLink){
        return studyLinkService.save(studyLink);
    }

    @GetMapping("/{studyLinkId}")
    public StudyLink findById(@PathVariable("studyLinkId") Long studyLinkId){
        return studyLinkService.findById(studyLinkId);
    }

    @PutMapping("/{studyLinkId}")
    public StudyLink update(@PathVariable("studyLinkId") Long studyLinkId, @RequestBody StudyLink studyLink){
        return studyLinkService.update(studyLinkId, studyLink);
    }

    @DeleteMapping("/{studyLinkId}")
    public String delete(@PathVariable("studyLinkId") Long studyLinkId){
        return studyLinkService.delete(studyLinkId);
    }

}
