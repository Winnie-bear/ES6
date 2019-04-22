class myPromise{
  constructor(executor){
      this.state='pending';
      this.value=undefined;
      this.reason=undefined;
      this.resolvedCbs=[];
      this.rejectedCbs=[];

      let resolve=(value)=>{
        if(this.state==='pending'){
          this.state='fulfilled';
          this.value=value;
          this.resolvedCbs.forEach(cb=>cb());
        }
      }
      let reject=(reason)=>{
         if(this.state==='pending'){
           this.state='rejected';
           this.reason=reason;
           this.rejectedCbs.forEach(cb=>cb());
         }
      }

      try{
        executor(resolve,reject);
      }catch(err){
        reject(err);
      }
  }
  then(onFulfilled,onRejected){
      onFulfilled=typeof onFulfilled ==='function'?onFulfilled:v=>v;
      onRejected=typeof onRejected==='function'?onRejected:(err)=>{
        throw err;
      }

      if(this.state==='fulfilled'){
        onFulfilled(this.value);
      }

      if(this.state==='rejected'){
        onRejected(this.reason);
      }

      if(this.state==='pending'){
        this.resolvedCbs.push(()=>{onFulfilled(this.value)});
        this.rejectedCbs.push(()=>{onRejected(this.reason)});
      }
  }
}

new myPromise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(1);
  },0)
}).then(value=>{
  console.log(value);
})