function a(t,n){let o="text/plain",e=document.createElement("a"),c=new Blob([t],{type:o});e.href=URL.createObjectURL(c),e.download=n,e.click(),e.remove()}export{a};
