package com.jeratest.studylinks.service;

import com.jeratest.studylinks.domain.StudyLink;
import com.jeratest.studylinks.repository.StudyLinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;

@Component
public class StudyLinkServiceImplementation implements StudyLinkService {

    private StudyLinkRepository studyLinkRepository;

    @Autowired
    public StudyLinkServiceImplementation(StudyLinkRepository studyLinkRepository) {
        this.studyLinkRepository = studyLinkRepository;
    }

    @Override
    public List<StudyLink> findAll(){
        return studyLinkRepository.findAll();
    }

    @Override
    public StudyLink findById(Long id){
        return studyLinkRepository.findById(id).get();
    }

    @Override
    @Transactional
    public StudyLink save(StudyLink studyLink){
        return studyLinkRepository.save(studyLink);
    }

    @Override
    @Transactional
    public StudyLink update(Long id, StudyLink studyLink){
        StudyLink sl = this.studyLinkRepository.getOne(id);
        sl = studyLinkRepository.save(studyLink);
        return sl;
    }

    @Override
    @Transactional
    public String delete(Long id){
        studyLinkRepository.deleteById(id);
        return "Done!";
    }
}
