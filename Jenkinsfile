pipeline {
  agent any

  environment {
    DOCKER_HUB_CRED = credentials('dockerhub-cred')
    IMAGE_NAME = 'parthdevops/fullstack-app'
  }

  stages {
    stage('Clone Repo') {
      steps {
        git url: 'https://github.com/devopsof/k8s-fullstack-cicd.git', branch: 'Main'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME:$BUILD_NUMBER .'
      }
    }

    stage('Push to DockerHub') {
      steps {
        sh 'echo $DOCKER_HUB_CRED_PSW | docker login -u $DOCKER_HUB_CRED_USR --password-stdin'
        sh 'docker push $IMAGE_NAME:$BUILD_NUMBER'
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh '''
          kubectl config use-context your-cluster-context
          kubectl set image deployment/cicd-deploy cicd=$IMAGE_NAME:$BUILD_NUMBER -n cicd-app
        '''
      }
    }
  }
}
