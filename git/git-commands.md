# Git 명령어 정리

## 기본 Git 명령어

### 저장소 초기화 및 설정
```bash
# 새 Git 저장소 초기화
git init

# 원격 저장소 복제
git clone <repository-url>

# 사용자 정보 설정
git config --global user.name "사용자명"
git config --global user.email "이메일주소"

# 현재 설정 확인
git config --list
```

### 파일 상태 확인 및 변경사항 추적
```bash
# 저장소 상태 확인
git status

# 변경사항 확인
git diff

# 스테이징된 변경사항 확인
git diff --staged

# 로그 확인
git log
git log --oneline
git log --graph
```

### 파일 스테이징 및 커밋
```bash
# 파일을 스테이징 영역에 추가
git add <파일명>
git add .  # 모든 변경된 파일 추가
git add -A  # 모든 변경사항 추가

# 스테이징된 파일을 커밋
git commit -m "커밋 메시지"

# 스테이징과 커밋을 한번에
git commit -am "커밋 메시지"
```

### 브랜치 관리
```bash
# 브랜치 목록 확인
git branch

# 새 브랜치 생성
git branch <브랜치명>

# 브랜치 생성과 동시에 전환
git checkout -b <브랜치명>
git switch -c <브랜치명>

# 브랜치 전환
git checkout <브랜치명>
git switch <브랜치명>

# 브랜치 병합
git merge <브랜치명>

# 브랜치 삭제
git branch -d <브랜치명>
git branch -D <브랜치명>  # 강제 삭제
```

### 원격 저장소 관리
```bash
# 원격 저장소 추가
git remote add origin <repository-url>

# 원격 저장소 목록 확인
git remote -v

# 원격 저장소에서 변경사항 가져오기
git fetch

# 원격 저장소에서 변경사항 가져오고 병합
git pull

# 원격 저장소로 변경사항 전송
git push
git push origin <브랜치명>

# 처음 푸시할 때 업스트림 설정
git push -u origin <브랜치명>
```

### 변경사항 되돌리기
```bash
# 워킹 디렉토리의 변경사항 되돌리기
git checkout -- <파일명>
git restore <파일명>

# 스테이징 영역에서 파일 제거
git reset HEAD <파일명>
git restore --staged <파일명>

# 최신 커밋 수정
git commit --amend

# 특정 커밋으로 되돌리기 (커밋 히스토리 유지)
git revert <커밋해시>

# 특정 커밋으로 되돌리기 (커밋 히스토리 삭제)
git reset --hard <커밋해시>
```

### 스태시(Stash) 사용
```bash
# 현재 작업 임시 저장
git stash

# 스태시 목록 확인
git stash list

# 최신 스태시 적용
git stash pop

# 특정 스태시 적용
git stash apply stash@{n}

# 스태시 삭제
git stash drop stash@{n}
```

### 태그 관리
```bash
# 태그 생성
git tag <태그명>
git tag -a <태그명> -m "태그 메시지"

# 태그 목록 확인
git tag

# 태그를 원격 저장소로 전송
git push origin <태그명>
git push origin --tags
```

### 유용한 기타 명령어
```bash
# 파일 추적 중지 (저장소에서 제거하지만 로컬에는 유지)
git rm --cached <파일명>

# 파일 완전 삭제
git rm <파일명>

# 파일 이름 변경
git mv <기존파일명> <새파일명>

# 특정 파일의 변경 히스토리 확인
git log -p <파일명>

# 커밋 간 차이점 확인
git diff <커밋1> <커밋2>

# 리베이스
git rebase <브랜치명>
```