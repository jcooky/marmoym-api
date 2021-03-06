import { db1 } from '../../database';

/**
 * ...
 */
export const getUsageByDefinitionId = async function getUsageByDefinitionId(definitionId: any) {
  var list = await db1.usage.findAll({
    where : {
      status : {$not: "DELETED"},
      $or : [
        {def_id : definitionId}
      ]
    },
    order : 'no asc'
  })
    .then(usages => usages)

  return list.map(info => info.dataValues)
}

/**
 * ...
 */
export const getUsageIdByDefinitionId = async (definitionId: number) => {
  var list = await db1.definition_usage.findAll({
    where : {
      $or : [
        {def_id : definitionId}
      ]
    }
  })
    .then(usageIdList => usageIdList)
  
  return list.map(elem => elem.dataValues.usage_id);
}

/**
 * ...
 */
export const registerUsage = async (params: any, definitionId: number) => {
  var result = await db1.usage.create({
    contents : params.usageContents, 
    no : '1',//TODO 순서처리
    def_id : definitionId
  })
    .then(result => result.dataValues.id)
    .catch(err => -1)
  
  return result;
}

/**
 * ...
 */
export const connectUsageIdAndDefinitionId = async (usageId: number, definitionId: number ) => {
  var result = await db1.definition_usage.create({
    def_id : definitionId,
    usage_id : usageId
  })
    .then(result => result.dataValues.id)
    .catch(err => -1)
    
  return result;
}
