# Git 개념 정리

## Git이란?
Git은 분산 버전 관리 시스템(Distributed Version Control System)입니다. 소스 코드의 변경 이력을 추적하고 여러 개발자가 협업할 수 있게 해주는 도구입니다.

## Git의 주요 개념

### 1. Repository (저장소)
- **Local Repository**: 개발자의 컴퓨터에 있는 저장소
- **Remote Repository**: 서버에 있는 저장소 (예: GitHub, GitLab)

### 2. Working Directory, Staging Area, Repository
- **Working Directory**: 실제 작업하는 디렉토리
- **Staging Area**: 커밋할 준비가 된 파일들이 대기하는 영역
- **Repository**: 커밋된 파일들이 저장되는 영역

### 3. Commit
파일의 변경 사항을 저장소에 기록하는 것입니다. 각 커밋은 고유한 해시값을 가집니다.

### 4. Branch (브랜치)
독립적인 작업 공간을 만드는 것입니다. 메인 브랜치에서 분기하여 새로운 기능을 개발할 때 사용합니다.

### 5. Merge (병합)
다른 브랜치의 변경 사항을 현재 브랜치에 합치는 것입니다.

## 주요 Git 명령어

### 초기 설정
```bash
git init                    # 새 저장소 생성
git clone <url>            # 원격 저장소 복제
git config --global user.name "이름"
git config --global user.email "이메일"
```

### 기본 작업
```bash
git status                 # 현재 상태 확인
git add <파일명>           # 파일을 staging area에 추가
git add .                  # 모든 변경된 파일을 staging area에 추가
git commit -m "메시지"     # 커밋 생성
```

### 브랜치 관련
```bash
git branch                 # 브랜치 목록 확인
git branch <브랜치명>      # 새 브랜치 생성
git checkout <브랜치명>    # 브랜치 전환
git checkout -b <브랜치명> # 브랜치 생성과 전환을 동시에
git merge <브랜치명>       # 브랜치 병합
```

### 원격 저장소 관련
```bash
git remote add origin <url>  # 원격 저장소 연결
git push origin <브랜치명>    # 원격 저장소에 푸시
git pull origin <브랜치명>    # 원격 저장소에서 풀
git fetch                    # 원격 저장소 정보 가져오기
```

### 이력 확인
```bash
git log                    # 커밋 이력 확인
git log --oneline          # 한 줄로 커밋 이력 확인
git diff                   # 변경 사항 확인
```

## Git 워크플로우

1. **파일 수정**: Working Directory에서 파일을 수정
2. **Staging**: `git add`로 변경된 파일을 Staging Area에 추가
3. **Commit**: `git commit`으로 변경 사항을 저장소에 기록
4. **Push**: `git push`로 원격 저장소에 업로드

## Git의 장점

- **분산 시스템**: 각 개발자가 전체 이력을 보유
- **브랜치 기능**: 병렬 개발 지원
- **무결성**: 데이터 손실 방지
- **속도**: 빠른 성능
- **협업**: 여러 개발자가 효율적으로 협업 가능

## 자주 사용하는 Git 시나리오

### 새 프로젝트 시작
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <repository-url>
git push -u origin main
```

### 기능 개발
```bash
git checkout -b feature/new-feature
# 개발 작업
git add .
git commit -m "Add new feature"
git checkout main
git merge feature/new-feature
```

### 실수한 커밋 수정
```bash
git commit --amend -m "새로운 커밋 메시지"  # 마지막 커밋 메시지 수정
git reset HEAD~1                          # 마지막 커밋 취소 (변경사항은 유지)
```