{ pkgs ? import <nixpkgs> {}
}:
pkgs.mkShell {
  name="next-boilerplate";
  buildInputs = [
    pkgs.nodejs-16_x
    pkgs.nodePackages.yarn
  ];
  shellHook = ''
   export PATH=~/.npm-packages/bin:$PATH
   export NODE_PATH=~/.npm-packages/lib/node_modules  
  '';
}