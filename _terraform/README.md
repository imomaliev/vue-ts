# Configuring project

## Set variables

```console
$ cp terraform.tfvars.template terraform.tfvars
```

## Run plan

```console
$ terraform init
$ terraform get
$ terraform plan
$ terraform apply
```

## For existing project

```console
$ terraform init
# import project from https://github.com/organization/project
$ terraform import github_repository.project project
$ terraform plan
$ terraform apply
```
