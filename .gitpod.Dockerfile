FROM gitpod/workspace-full:latest

RUN bash -c 'sh <(curl https://tea.xyz) -SE +xcfile.dev'
