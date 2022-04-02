function solve(shop) {

    let total = 0;
    let final = 'Bought furniture:\n';
   
  for (const line of shop) {
   
    let pattern = />>(?<type>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<qty>[\d]+)/g;
    let result = pattern.exec(line);
  
    if (result) {
      final += result.groups.type + '\n';
      total += Number(result.groups.price) * Number(result.groups.qty);
    }
  }  
  
  final += `Total money spend: ${total.toFixed(2)}`;
  console.log(final);
  
  
  }

  solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])