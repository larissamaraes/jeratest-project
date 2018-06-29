package com.jeratest.studylinks.service;

import com.jeratest.studylinks.domain.StudyLink;

import java.util.List;

public interface StudyLinkService {

    List<StudyLink> findAll();

    StudyLink findById(Long id);

    StudyLink save(StudyLink studyLink);

    StudyLink update(Long id, StudyLink studyLink);

    String delete(Long id);
}
