package com.jeratest.studylinks.repository;

import com.jeratest.studylinks.domain.StudyLink;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudyLinkRepository extends JpaRepository<StudyLink, Long> {
}
